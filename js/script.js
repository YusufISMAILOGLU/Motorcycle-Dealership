// Preloader
const preloader=document.querySelector('.preloader');
window.addEventListener("load", function(){
    preloader.classList.add('hidePreloader')
    });
// Search bar    
const searchBar=document.getElementsByClassName('form-control')[0];
searchBar.addEventListener('keyup',event=>{
    const searhBarValue =event.target.value;
    console.log(searhBarValue);
    
    
})



// year
const year=new Date().getFullYear();
document.querySelector('.year').textContent = year;
// Motorcycle data
const CreateCycle= (()=>{    
    const cycles=[];
    class Cycle{
        constructor(make,img,special,model,price,type,trans,fuel){
            this.make=make;
            this.img=img;
            this.special=special;
            this.model=model;
            this.price=price;
            this.type=type;
            this.trans=trans;
            this.fuel=fuel;
        }

    }
    // cycle creation function
    function makeCycle(make,img,special,model,price,type,trans,fuel){
        const cycle=new Cycle(make,img,special,model,price,type,trans,fuel);
        cycles.push(cycle);
    }
    // produce cycles
    function produceCycles(){
        makeCycle('bmw','images/bmw-2.jpg',false,'R NINET URBAN G/S',10000,'heritage','EU-4','RON');
        makeCycle('bmw','images/bmw-3.jpg',true,'K1600GT',10000,'tour','EU-4',' e-pipe injection');
        makeCycle('bmw','images/bmw-1.jpg',true,'F900R',10000,'roadster','EU-5','electronic injection');
        makeCycle('suzuki','images/suzuki-1.png',false,' Burgman',10000,'scooter','CVT','fuel injection');
        makeCycle('suzuki','images/suzuki-2.png',false,'GSX-R1000R',10000,'sporBike','6-speed','Fuel injection');
        makeCycle('suzuki','images/suzuki-3.png',false,'Boulevard S40',10000,'cruiser','5-speed','Mikuni BS40');
        makeCycle('yamaha','images/yamaha-1.jpg',true,'tenere-700',10000,'adventure','6-speed','Fuel Injection');
        makeCycle('yamaha','images/yamaha-2.jpg',false,'zuma-125',10000,'scooter','automatic','Fuel injection');
        makeCycle('yamaha','images/yamaha-3.jpg',true,'star-eluder',10000,'transcontinental','6-speed','D-Mode');
        makeCycle('yamaha','images/yamaha-4.jpg',false,'fjr1300a',10000,'sport','6-speed','YCC-T');
    }
    produceCycles();
    // special cycles
    const specialCycles=cycles.filter(function(cycle){
        return cycle.special===true;
    })

    return{
        cycles,
        specialCycles
    }
})();

// Display featured cycles
const DisplayFeaturedCycles=(CreateCycle => {
    const info=document.querySelector('.featured-info');
    const featuredCycles = CreateCycle.specialCycles;    
    info.innerHTML='';
    let data='';
    featuredCycles.forEach(item=>{
        data+=`
        <!-- Single item -->
                    <div class="featured-item my-3 d-flex flex-wrap p-2 text-capitalize align-items-baseline">
                        <span class="featured-icon mr-2" data-img=${item.img}>
                            <i class="fas fa-motorcycle"></i>
                        </span>
                        <h5 class="font-weight-bold mx-1">${item.make}</h5>
                        <h5 class=" mx-1">${item.model}</h5>
                    </div>
        `
    })
    info.innerHTML=data;

    info.addEventListener('click',(event)=>{
        if(event.target.parentElement.classList.contains('featured-icon')){
            const img =event.target.parentElement.dataset.img;            
            document.querySelector('.featured-photo').src=img;
        }
    });
})(CreateCycle);

//Display all cycle
const DisplayCycles=(CreateCycle=>{
    const cycles=CreateCycle.cycles;
    const inventory=document.querySelector('.inventory-container');
    document.addEventListener('DOMContentLoaded',cycle=>{
        inventory.innerHTML="";
        let data='';
        cycles.forEach(item=>{
            data+=`
            <!-- single motor -->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-motor ${item.make}">
                <div class="card motor-card">
                    <img src="${item.img}" class="card-img " alt="">
                    <div class="card-body">
                        <div class="motor-info d-flex justify-content-between">
                            <div class="card-text text-uppercase">
                                <h6 class="font-weight-bold">${item.make}</h6>
                                <h6 >${item.model}</h6>
                            </div>

                            <h5 class="motor-value align-self-center px-3 py-2">
                                <span class="motor-price">&#8378;${item.price}</span>
                            </h5>
                        </div>
                    </div>
                    <div class="card-footer text-capitalize d-flex justify-content-between">
                        <p><i class="fas fa-motorcycle"></i> ${item.type}</p>
                        <p><i class="fas fa-cogs"></i> ${item.trans}</p>
                        <p><i class="fas fa-gas-pump"></i> ${item.fuel}</p>
                    </div>
                </div>
            </div>
            <!-- end of single motor -->
            `
        })
        inventory.innerHTML=data;
    })

})(CreateCycle);

//Filter cycles
const FilterCycles=(()=>{
    const filterBtn=document.querySelectorAll('.filter-btn');
    filterBtn.forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            const value=event.target.dataset.filter;
            const singleMotor=document.querySelectorAll('.single-motor');
            singleMotor.forEach((motor)=>{
                if(value==='all'){
                    motor.style.display='block';
                }
                else{
                    (!motor.classList.contains(value))?motor.style.display='none' : motor.style.display='block';
                        
                }

                
            })


        })
    })
})();


