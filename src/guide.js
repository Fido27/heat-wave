/*guide page when heat wave guide is pressed*/ 
export default function Guide() {

    return (
        <>
        <div className="guide_container">
            <div className="guide"> {/* Wrap the JSX elements inside a parent div */}
                {/* Do's and Dont's for during a heat wave*/}
                <h1>Heat Wave Guide</h1>
                <h3>Heat waves are a wave/period of abnormally hot weather usually lasting a couple days. Sometimes accompanied by high humidity.
                </h3>

                <h3>Exposure to heatwaves can cause edema, syncope, cramping, heat exhaustion and the feared heat stroke, that can lead to death.</h3>

                <h2> --- DO's -----------------------</h2>
                <ul>
                    <li>Utilize air conditioners and find locations (libraries, mall, etc.) to stay in</li>
                    <li>Utilize portable battery powered fans to shove hot air from rooms and attract cool air</li>
                    <li>Take a cool bath or shower</li>
                    <li>Stay in shaded areas as much as possible</li>
                    <li>Stay hydrated and drink water or other nonalcoholic fluids</li>
                    <li>Check on older or vulnerable people who may need help responding to the heat</li>
                    <li>Know the effects of excessive heat exposure and the appropriate responses</li>
                </ul>
                <h2> --- DONT's --------------------</h2>
                <ul>
                    <li>Direct the flow of portable electric fans toward yourself when room temperature is hotter than 90°F</li>
                    <li>Leave children and pets alone in cars or enclosed spaces without air conditioning for any amount of time</li>
                    <li>Drink alcohol to try to stay cool</li>
                    <li>Eat heavy, hot, or hard-to-digest foods</li>
                    <li>Wear heavy, dark clothing</li>
                </ul>
            </div>
        </div>
        </>
    );
}