import './About.css';

const About = (props) => {

    const { title, descr1, descr2, imgUrl } = props;

    const leftSideImg = imgUrl ? <div className="left-img"><img src={imgUrl} alt='.'/></div> : null;

    return (
        <div className='about-block'>
            {leftSideImg}
            <div>
                <h2>{title}</h2>
                <img src="https://i.imgur.com/97DMUS4.png" alt="Beans logo" />
                <p>{descr1}</p>
                <p>{descr2}</p>
            </div>
        </div>  
    )
}

export default About; 