class Slider{
    constructor(){
        this.images = [];
        this.images[0] = "img/cssimg.png";
        this.images[1] = "img/kkk.jpg";
        this.images[2] = "img/htmlimg.png";

        this.links = [];
        this.links[0] = "https://youtube.com/";
        this.links[1] = "https://google.com";
        this.links[2] = "https://gmail.com/";

        this.counter = 0;

        this.playSlider();

        setInterval(()=>{
            this.playSlider();
        },4000);
    }
    playSlider(){
        if(this.counter < this.images.length -1){
            this.counter++;
        }
        else{
            this.counter = 0;
        }

        document.slider_show.src = this.images[this.counter];  // name
        // document.getElementById('img').src = this.images[this.counter];  // id
        document.getElementById('LinkImg').href = this.links[this.counter];  // id
    }
}
onload = new Slider();