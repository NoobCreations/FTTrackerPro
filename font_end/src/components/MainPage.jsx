import Button from '../components/Button'

function MainPage({message}) {


    return (
        <div className="mainPage">
            <div className="content">
                <p>{message}</p>
                <Button title="start" whichClass="startBtn" alt="Start button"/>
            </div>
        </div>
    );
}

export default MainPage;