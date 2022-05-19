// Introduction
import hr from '../assets/hr.png'

function Introduction() {
    return (
        <section className = 'introduction'>
            <div className='introImg'>
                <img src={hr} alt='HR person introduces detective for Pokemon Detective game'></img>
            </div>
            <div className = 'openingText'>
                <p>Hello there! Welcome to the Scotland Yard’s Pokémon Investigation Unit. This special unit solves crimes with the help of Pokémon. These Pokémon are specially trained and qualified to assist PIU detectives with their cases.</p>
                <p>Oh! I see you don’t have your PIU ID with you – it must be your first day as a Detective! Congratulations! </p>
                <p>Let me help you get your ID set up...</p>    
                <p className='giveName'>Can you give me your name?</p>
                <p className='giveName'>Also, where would you like to work today?</p>    
            </div>
        </section>
    )
}
export default Introduction;