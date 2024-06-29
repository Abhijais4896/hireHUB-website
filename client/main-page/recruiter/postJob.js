//post job

const postjobform = document.getElementById("postjobform")
const closeModel = document.getElementById('closeModelBtn')

const postJob = async() => {
    const jobtitle = postjobform.jobtitle.value;
    const jobtype = postjobform.jobtype.value;
    const tasks = postjobform.tasks.value.split(/[,]+/g);
    const company = postjobform.company.value;
    const salary = postjobform.salary.value;
    const location = postjobform.location.value;
    const skills = postjobform.skills.value;
    const jobdescription = postjobform.jobdescription.value;
    const state = postjobform.state.value;
    const user = JSON.parse(sessionStorage.getItem('userdetails')).username;
    const posttime = Date.now().toString();

    const job = { jobtitle, jobtype, tasks, company, salary, location, skills, jobdescription, state, user,posttime };
    const response = await postjob(job)
    // console.log(response)
    closeModel.click();
}

//post Job
const postjob = async (job) => {
    const response = await fetch(`${BASE_URL}/post-jobs`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(job)
    })
    const data = await response.json();
    return data;
}