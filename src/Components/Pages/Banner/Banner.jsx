import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i0.wp.com/getflowdotcom.wpcomstaging.com/wp-content/uploads/2020/05/task-management-tips.jpg?fit=1255%2C835&ssl=1" className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Task Management!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/login"><button className="btn btn-primary">Lets Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;