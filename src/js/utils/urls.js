// all urls needed to talk to backend

//************************* Auth urls **************************/
export const registerUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/auth/register";
export const signInUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/auth/login";
export const logoutUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/auth/logout";


//************************* User urls *************************/
export const getCurrentUserUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/user/current_user";
export const updateUserDetailsUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/user/update_user";
export const updateUserPasswordUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/user/update_user_password";


//************************* Project urls *************************/
export const getAllProjectsUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/project";
export const createProjectUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/project";
export const closeProjectUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/project/close_project"


//************************* Issues urls **************************/
export const getAllIssuesBaseUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/issue";
export const createIssueUrl = "https://bugz-it-issue-tracker.herokuapp.com/api/v1/issue";
export const getAllLabels = "https://bugz-it-issue-tracker.herokuapp.com/v1/issue/get_labels";

//********************************** LOCAL TEST URLS ***************************/


// //************************* Auth urls **************************/
// export const registerUrl = "http://localhost:5000/api/v1/auth/register";
// export const signInUrl = "http://localhost:5000/api/v1/auth/login";
// export const logoutUrl = "http://localhost:5000/api/v1/auth/logout";


// //************************* User urls *************************/
// export const getCurrentUserUrl = "http://localhost:5000/api/v1/user/current_user";
// export const updateUserDetailsUrl = "http://localhost:5000/api/v1/user/update_user";
// export const updateUserPasswordUrl = "http://localhost:5000/api/v1/user/update_user_password";


// //************************* Project urls *************************/
// export const getAllProjectsUrl = "http://localhost:5000/api/v1/project";
// export const createProjectUrl = "http://localhost:5000/api/v1/project";
// export const closeProjectUrl = "http://localhost:5000/api/v1/project/close_project"


// //************************* Issues urls **************************/
// export const getAllIssuesBaseUrl = "http://localhost:5000/api/v1/issue";
// export const createIssueUrl = "http://localhost:5000/api/v1/issue";
// export const getAllLabels = "http://localhost:5000/api/v1/issue/get_labels";
