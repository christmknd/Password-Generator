import React , {useState , useEffect}  from 'react';

function PasswordGenerator() {
    const [password , setPassword]= useState("");
  

    useEffect(() => {
        generatePassword();
    }, [])

    function generatePassword(){
        let miniscules = 'abcdefghijklmnopqrstuvwxyz';
       /* let majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let nombres = '0123456789';
        let specs = '?,.;/:+=[](){}-_@%^£#€';*/
        let result = ' '
        const miniLength = miniscules.length;
        /*const majlength = majuscules.length
        const nblength = nombres.length;
        const splength = specs.length;*/

        for(let i = 0; i < 12 ; ++i){
         result += miniscules.charAt(Math.floor(Math.random() * miniLength));
        }
        setPassword(result)
    }

  return (
    <div>
        <div>
            <h2>Mot de passe</h2>
            <button onClick={generatePassword} type="submit">Generer</button>
        </div>
        <div className="result">
            <p>{password}</p>
        </div>
    </div>
  )
}

export default PasswordGenerator