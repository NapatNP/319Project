// Project.jsx
import React from 'react';
import './sub_project.css';
import data from "../../data/project.json";
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <>
            <section id="sub_project" className='container'>
                <div className='project-sub-header'>
                    <div className='text-header'>
                        <p>โครงการ</p>
                        <h1>Project</h1>
                    </div>
                    <div className="">
                        <p><a href="/">all</a> | <Link to="/project/1">โครงการที่ 1</Link> | <Link to="/project/2">โครงการที่ 2</Link> | <Link to="/project/3">โครงการที่ 3</Link></p>
                    </div>
                </div>
                <div className='sub-project-section'>
                    {data?.projects?.map((item, index) => (
                        <div key={index} className='project-card' id={item.type}>
                            <div className='project-img'>
                                <img src={item.src} alt="" />
                            </div>
                            <div className='project-content' >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className='text-sm'>
                                    <Link to={`/${item.id}`} className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i className='bx bx-right-arrow-alt'></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Project;