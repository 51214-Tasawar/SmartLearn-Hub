fetch("../Course.json")
.then((Courses)=>Courses.json())
.then(data=>{
    let cards = ""
    data.forEach((course)=>(     
        cards +=  `
    <div  style=" width: 370px; height: 390px; background-color: antiquewhite ; border-radius: 10px;">
        <div style="display: flex; width: 100%; height: 45%">
          <img src="${course.image}"/>
        </div>
        <div style="display: flex;flex-direction: column;width: 100%;justify-content: flex-start;
            padding: 10px; gap: 20px;">
          <p style=" width: 40%;height: max-content;border: 2px solid; border-radius: 5px;
              text-align: center;">${course.Course}</p>
          <p style="font-size: 20px; font-weight: 500">by ${course.Tutorname}</p>
          <div style="display: flex; justify-content: space-evenly">
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px">
              <i class="text-yellow-400 fa fa-star"></i>
              <p>${course.rating}</p>
            </div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px">
              <i class="fa fa-users"></i>
              <p>${course.member}</p>
            </div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px">
              <i class="fa-regular fa-clock"></i>
              <p>${course.CourseDuration}</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center">
            <button style="width: 80%;height: 30px;background-color: blue;
                border-radius: 10px;color: white;cursor: pointer;">
              Start Course
            </button>
          </div>
        </div>
      </div> `
    ))
    document.getElementById("Courses").innerHTML = cards
}).catch((error)=>{
    console.log(`Error Is ${error}`)
})

