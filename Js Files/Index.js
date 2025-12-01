fetch("../Course.json")
.then((Courses)=>Courses.json())
.then(data=>{
    let cards = ""
    data.map((course)=>(     
        cards += `
    <div style="width: 370px; height: 390px; background-color: antiquewhite;
     border-radius: 10px; transition: transform 0.3s ease; cursor:pointer;"
     onmouseover="this.style.transform='scale(1.05)'"
     onmouseout="this.style.transform='scale(1)'"
       "id="p-card">
        <div style="display: flex; width: 100%; height: 45% ">
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
                border-radius: 10px;color: white;cursor: pointer;"onclick="LearnEdge()">
              Start Course
            </button>
          </div>
        </div>
      </div> `
    ))
    document.getElementById("Courses").innerHTML = cards
})

function LearnEdge(index) {
    fetch("../Course.json")
    .then(res => res.json())
    .then(data => {
        const course = data[index]; // get only clicked course
        const card = `
        <div style="display:flex; width:100%; height:100vh; background-color:antiquewhite; border-radius:10px;">
            <div style="width:50%; display:flex;flex-direction:column; justify-content:space-evenly; padding:20px;">
                <p style="font-size:28px; font-weight:600;">${course.Course}</p>
                <p style="font-size:16px;">${course.description}</p>
                <p style="font-size:20px; font-weight:500;">by ${course.Tutorname}</p>
                <div style="display:flex; justify-content:space-evenly; gap:15px;">
                    <div style="display:flex; align-items:center; gap:5px;">
                        <i class="text-yellow-400 fa fa-star"></i>
                        <p>${course.rating}</p>
                    </div>
                    <div style="display:flex; align-items:center; gap:5px;">
                        <i class="fa fa-users"></i>
                        <p>${course.member}</p>
                    </div>
                    <div style="display:flex; align-items:center; gap:5px;">
                        <i class="fa-regular fa-clock"></i>
                        <p>${course.CourseDuration}</p>
                    </div>
                </div>
                <div style="display:flex; justify-content:center; margin-top:20px;">
                    <button style="width:80%; height:35px; background-color:blue; color:white; border-radius:10px; cursor:pointer;">
                        Start Learning
                    </button>
                </div>
            </div>
            <div style="width:50%; padding:20px;">
                <img src="${course.image}" style="width:100%; height:100%; object-fit:cover; border-radius:10px;"/>
            </div>
        </div>`;
        document.getElementById("Courses").innerHTML = card;
    });
}





