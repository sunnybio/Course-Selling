import { Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const CoursePage = () => {
    const [cousrseList, setCourseList] = useState<CourseCardProps[]>([])
    useEffect(() => {
        console.log("herer")
        const headers = {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNzc3Nzc3MiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTEzMDI1NjksImV4cCI6MTY5MTMwNjE2OX0._7mS26Z1_BLMhaC54L90RAp2icslaO65WpvnShGwNhU",
            'Content-Type': 'application/json'
        };
        axios.get("http://localhost:3000/admin/courses", { headers }).then(
            response => {
                setCourseList(response.data.courses);

                console.log("asd", typeof (response.data.courses));
                console.log(cousrseList)

            }
        ).catch(error => {
            console.error('Error fetching users:', error);
        });

    }, [])

    return <>
        <h5>Courses</h5>

        {cousrseList.map(course => {
            console.log(course)
            return <h1>{JSON.stringify(course)}</h1>
        })}
    </>
}

interface CourseCardProps {
    title: String;
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
}
const CourseCard = (props: CourseCardProps) => {

    return <Card>
        <Typography variant="h4" color="initial">{props.title}</Typography>
    </Card>
}

export default CoursePage;