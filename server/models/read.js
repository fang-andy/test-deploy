const db = require('../db');

module.exports = {

    getUserData: (params) => {
        const query = `SELECT full_name, full_name_full, role, recordid, email, communities, career_tracks, linkedin, 
    mobile_phone_number, about_me, pronouns, job_title, company, onboarding_completed, profile_photo,
    (SELECT JSON_AGG(JSON_BUILD_OBJECT(
      'start_date', start_date, 'mentee_full_name', full_name_mentee_user, 'mentee_photo', profile_photo_from_mentee_user, 
      'mentee_user', mentee_user, 'mentor_full_name', full_name_mentor_user, 'mentor_photo', profile_photo_from_mentor_user,
      'mentor_user', mentor_user, 'recordid', recordid, 'created', created, 'mentor_about', about_me_from_mentor_user, 'mentee_about', about_me_from_mentee_user, 'mentor_job', job_company_from_mentor_user, 'mentee_job', job_company_from_mentee_user        
      ))
    FROM pairings WHERE pairings.mentee_user = users.recordid OR pairings.mentor_user = users.recordid) AS pairings,
    (SELECT JSON_AGG(JSON_BUILD_OBJECT(
      'task_name', name_from_program_assignments, 'task_image', image_from_program_assignments, 'task_recordid', record_id, 'task_pairings', pairings, 'mentee_user_from_pairings', 
      mentee_user_from_pairings, 'mentor_user_from_pairings', mentor_user_from_pairings, 'date_completed', date_completed, 'task_type', 
      action_type_from_program_assignments, 'program_users', program_users, 'programs', programs, 'full_name_mentor', full_name_mentor_user_from_pairings, 'full_name_mentee', full_name_mentee_user_from_pairings, 'mentor_pic', profile_photo_from_mentor_user_from_pairings, 'mentee_pic', profile_photo_from_mentee_user_from_pairings, 'cta_label', cta_label_from_program_assignments,'description', description_from_program_assignments, 'status', status, 'url', url_from_program_assignments, 'order', order_
      ))
    FROM tasks WHERE tasks.user_ = users.recordid) AS tasks,
    (SELECT JSON_AGG(JSON_BUILD_OBJECT(
      'name', name,'image', image,'url', url,'recordid', recordid, 'order', order_))
    FROM journey) AS journey
    FROM users
    WHERE users.email = $1;`;
    
    return db.query(query, params);
    },

    getConnections: (params) => {
        const query = `SELECT id, 
            (SELECT JSON_AGG(JSON_BUILD_OBJECT(
                'file', file, 'name', name, 'task', task, 'created', created, 'type', type
            ))
            FROM uploads WHERE uploads.user_ = users.id) AS uploads, 
            (SELECT JSON_AGG(JSON_BUILD_OBJECT(
                'name', name, 'recordid', recordid, 'checked', checked, 'created', bucket_list.created, 'pairings', pairings, 
                'mentee_user_from_pairings',mentee_user_from_pairings, 'mentor_user_from_pairings', mentor_user_from_pairings
            )) 
            FROM bucket_list WHERE bucket_list.pairings = $2) AS bucket_list,
            (SELECT JSON_AGG(JSON_BUILD_OBJECT(
                'name', name, 'user', user_, 'pairing', pairing, 'icon', icon, 'created', created
            ))
            FROM timeline WHERE timeline.pairing = $2) AS timeline
            FROM users WHERE users.id = $1;`;
        console.log('params ', params);
        return db.query(query, params);
    }

};

// use email to get recordid which we can use to match the user_ in tasks table