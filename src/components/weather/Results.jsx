//Results.js conditionTextからconditionに変更でアイコンと天気の結果表示される。
const Results = ({ results }) => {

    const { country, cityName, temperature, condition, icon } = results;
    return (
        <>  
            {country && 
                <div className="results-country">{country}</div>
            }
            {cityName && 
                <div className="results-city">{cityName}</div>
            }
            {temperature && 
                <div className="results-temp">{temperature}<span>°C</span></div>
            }
            {condition && <div className="results-condition"><img src={icon} alt="icon" />
                     <span>{condition}</span>
                 </div>
             }
       </>  

    );
};

export default Results;