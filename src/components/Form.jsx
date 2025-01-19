//Form.js
const Form = ({ city, setCity, getWeather }) => {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}/>
            <button type="submit" className="button1" onClick={getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;