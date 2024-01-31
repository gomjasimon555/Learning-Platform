const CourseIdPage = ({
    params 
}:{
    params: {coursesId:string}
}) => {
    return (
        <div >
Course Id Page:{params.coursesId}
        </div>
    )
}

export default CourseIdPage;