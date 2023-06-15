import React , {useState , useEffect}  from 'react';

function PasswordGenerator() {
    const [password , setPassword]= useState("");
  

    useEffect(() => {
        generatePassword();
    }, [])

    function generatePassword(){
        let miniscules = 'abcdefghijklmnopqrstuvwxyz';
        let majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let nombres = '0123456789';
        let specs = '?,.;/:+=[](){}-_@%^£#€';

        let result = '' ;
        let result_one = '' ;
        let result_two = '' ;
        let result_three = '' ;
        let result_four = '' 
        
        const miniLength = miniscules.length;
        const majlength = majuscules.length
        const nblength = nombres.length;
        const splength = specs.length;

        for(let i = 0; i < 4 ; ++i){
            result_one += miniscules.charAt(Math.floor(Math.random() * miniLength));
        }

        for(let i = 0; i < 4 ; ++i){
            result_two += majuscules.charAt(Math.floor(Math.random() * majlength));
        }

        for(let i = 0; i < 2 ; ++i){
            result_three += nombres.charAt(Math.floor(Math.random() * nblength));
        }

        
        for(let i = 0; i < 2 ; ++i){
            result_four += specs.charAt(Math.floor(Math.random() * splength));
        }
        
       
        setPassword(result = result_one.concat('',result_two,'', result_three,'',result_four) )
    }

    
  return (
    <div data-testid="password-generator">
        <div>
            <h2>Mot de passe</h2>
            <button onClick={generatePassword} type="submit">Generer</button>
        </div>
        <div className="result">
            <p data-testid='password'>{password}</p>
        </div>
    </div>
  )
}

export default PasswordGenerator