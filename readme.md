<div align="center">
  <h3 align="center">Clone-ify - iPad OS</h3>

  <p align="center">
    An iPad OS clone web application!
    <br />
    <a href="https://github.com/danjkim21/clonify-ipadOS"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://danjkim21.github.io/clonify-ipadOS/">View Live App</a>
    ·
    <a href="https://github.com/danjkim21/clonify-ipadOS/issues">Report Bug</a>
    ·
    <a href="https://github.com/danjkim21/clonify-ipadOS/issues">Request Feature</a>
  </p>
</div>



## About The Project 

I've always loved the visual design of the iPad operating system (OS), even through all of its development issues and delays. I wanted to recreate the enviroment and this project has evolved significantly as I explored software engineering tools and tech. <br> 

This project simulates the iPad OS, from displaying widgets, to functional applications (eg. safari, messenger, etc.). It is a work in progress and is constantly evolving as new features are planned and added.

<p align="center">
  <img src="img/Ipad-OS-Clone.png" width="75%" alt="Clone-ify app screenshot"/>
</p>


## How It's Made

**Tech used:** HTML, CSS, JavaScript, APIs. <br>

 I built the application layout with flexbox (may go back and refactor with grid) in order to create the iPad Display and features. <br>

The weather widget pulls data from the [OpenWeatherMaps API](https://openweathermap.org/api). 

The music widget and app pulls the top ten most played songs from the [LastFM API](https://www.last.fm/api)

I found an article from blog by [Ralph J. Smit](https://ralphjsmit.com/animated-custom-cursor) that walks through creating custom mouse cursors, which I then modified to replicate the iPad OS cursor when using a mouse. 

## Lessons Learned:

I've learned that vanilla CSS is extremely powerful, but also can get quite complicated if you are not cleaning up your code often. I'll need to go back and refactor and make sense of it all. I also learned how important leaving comments are. Lastly, I've learned that ensuring cross browser compatibility is essential. NOTHING WORKS ON SAFARI.

## Roadmap

- [x] Fully draft README
- [x] Build out each app on the dock
- [x] Integrate song API into music app
- [x] Create password screen that opens on swipe up
- [ ] Refactor, refactor, refactor, & refactor (make sure animations and interactions work in Safari)
- [ ] Rebuild JS weather API and the mouse effect
- [ ] Add in animations for each app open and close

See the [open issues](https://github.com/danjkim21/clonify-ipadOS/issues) for a full list of proposed features (and known issues).


## Contributing


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Daniel Kim - [@devdanielk](https://twitter.com/devdanielk) - dan.jkim21@gmail.com

Project Link: [https://github.com/danjkim21/clonify-ipadOS](https://github.com/danjkim21/clonify-ipadOS) 
<br>
Github Live Page: [https://danjkim21.github.io/clonify-ipadOS/](https://danjkim21.github.io/clonify-ipadOS/)
