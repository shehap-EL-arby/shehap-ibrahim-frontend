import '../style/footer.css';

export default function Footer(){
    return(
    <footer className='footer'>
        <div className='container row'>
            <div className='footer-col'>
                <h4>Companys</h4>
                <ul>
                    <li><a target="_blank" href='https://www.adobe.com/eg_ar/creativecloud.html?gclid=CjwKCAjw0aS3BhA3EiwAKaD2ZZRJuJFGBZvOPP--eeKlxmUQWvCUnMzYCYkACFRhLraPIJPYq42HfRoCH-oQAvD_BwE&skwcid=AL!3085!3!650707065059!e!!g!!adobe&mv=search&mv=search&mv2=paidsearch&sdid=D4P81NYZ&ef_id=CjwKCAjw0aS3BhA3EiwAKaD2ZZRJuJFGBZvOPP--eeKlxmUQWvCUnMzYCYkACFRhLraPIJPYq42HfRoCH-oQAvD_BwE:G:s&s_kwcid=AL!3085!3!650707065059!e!!g!!adobe!19781876592!149691191191&gad_source=1'>Adobe</a></li>
                    <li><a target="_blank" href='https://docs.github.com/en'>GitHub</a></li>
                    <li><a target="_blank" href='https://react-bootstrap.netlify.app/'>React Bootstrap</a></li>
                    
                </ul>
            </div>

            <div className='footer-col'>
                <h4>get help</h4>
                <ul>
                    <li><a target="_blank" href='https://www.w3schools.com/'>W3schools</a></li>
                    <li><a target="_blank" href='https://harmash.com/'>Harmash</a></li>
                    <li><a target="_blank" href='https://tailwindui.com/'>Tailwind</a></li>
                </ul>
            </div>

            <div className='footer-col'>
                <h4>online shop</h4>
                <ul>
                    <li><a target="_blank" href='#'>download</a></li>
                    <li><a target="_blank" href='#'>download</a></li>
                    <li><a target="_blank" href='#'>download</a></li>
                </ul>
            </div>

            <div className='footer-col'>
                <h4>follow us</h4>
                <div className='social-links'>
                    <a target="_blank" href='#'><i className='fa-brands fa-facebook-f'></i></a>
                    <a target="_blank" href='#'><i className='fa-brands fa-x-twitter'></i></a>
                    <a target="_blank" href='#'><i className='fa-brands fa-instagram'></i></a>
                    <a target="_blank" href='#'><i className='fa-brands fa-linkedin-in'></i></a>
                </div>
            </div>
        </div>
    </footer>
    );
};