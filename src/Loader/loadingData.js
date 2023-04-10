

const categoryLoader = async () =>{
    
    
	const categoryLoadedData = await fetch('/public/catagory_info.json');
	const categories = categoryLoadedData.json();
	console.log(categories);
	return categories;
}
const jobLoader = async () =>{
    
    
	const jobLoadedData = await fetch('/public/jobs.json');
	const jobs = jobLoadedData.json();
	console.log(jobs);
	return jobs;
}
export {categoryLoader,jobLoader};
// export default {categoryLoader};