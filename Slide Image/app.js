//slide left right

const Slides = document.querySelectorAll('.slide');
var counter = 0;

Slides.forEach(
    (slider,index)=>{
        slider.style.left = `${index * 100}%`
    }
)

const goPrev =()=>{
    counter --
    SlideImage()
}

const goNext = ()=>{
    counter ++ 
    SlideImage()
}



const SlideImage = ()=>{
    Slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}


//slide top bottom

// const Slides = document.querySelectorAll('.slide');
// var counter = 0;

// Slides.forEach(
//     (slider,index)=>{
//         slider.style.bottom = `${index * 100}%`
//     }
// )

// const goPrev =()=>{
//     counter --
//     SlideImage()
// }

// const goNext = ()=>{
//     counter ++ 
//     SlideImage()
// }



// const SlideImage = ()=>{
//     Slides.forEach(
//         (slide) =>{
//             slide.style.transform = `translateY(${counter*100}%)`
//         }
//     )
// }





