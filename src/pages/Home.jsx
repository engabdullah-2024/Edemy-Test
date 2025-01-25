import Header from "../components/Header"
import React from "react"

function Home(){
    return<div>
        <Header/>
        <div className="px-20 py-2 text-center mt-10 flex justify-between items-center gap-8 flex-col sm:flex-row">
            <div>


<h1 className="sm:text-5xl text-4xl font-bold text-blue-500">Welcome To Edemy E-Learning Platform</h1>
<p className="mt-5 text-orange-500"> your go-to e-learning platform for gaining new skills and knowledge. With a variety of courses, expert instructors, and flexible learning options, Edemy ensures an engaging and accessible learning experience anytime, anywhere. Start your journey with Edemy today!</p>
<button className="px-6 py-2  mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
  Explore Courses Now
</button>
            </div>
<img src="https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-student-journey-through-e-learning-with-online-courses-and-quizzes-image_16698302.jpg" 
  className="border-4 border-transparent hover:border-blue-500 hover:animate-blink rounded-lg transition duration-300" />


    </div>
        </div>
}


export default Home