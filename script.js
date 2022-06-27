const videofile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon'),

      function playpause() {
      	if (videoFile.paused){
      		//play video
      		videoFile.play()

      		//we changed the icon
      		videoIcon.classList.add('ri-pause-line')
      		videoIcon.classList.remove('ri-play-line')

        }else{
        	//pause video
        	videoFile.pause()

        	//we change icon
        	videoIcon.classList.remove('ri-pause-line')
        	videoIcon.classList.add('ri-play-line')

        }


      	
      }

      videoButton.addEventListener('click',playpause)

      function finalvideo(){
      	//video ends ,icon changes
      	videoIcon.classList.remove('ri-pause-line')
      	videoIcon.classList.add('ri-play-line')
      }
      //ended
      videoFile.addEventListener('ended',finalvideo)




      var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        loop:true,
        autoplay: {
          delay: 2500,
          disableonInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },

      });