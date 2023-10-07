import "../css/subjects.css";

export const Subjects = () => {


    return (
        <div classname=".subjects-body">
            <h1>Choose your subject:</h1>
            <div class="row">
                <div class="column">
                    <div class="subject-container">Math</div>
                    <div class="subject-container">English</div>
                    <div class="subject-container">Chemistry</div>
                    <div class="subject-container">History</div>
                </div>
                <div class ="column">
                    <div class="subject-container">Biology</div>
                    <div class="subject-container">Physics</div>
                    <div class="subject-container">Foreign Languages</div>
                </div>
            </div>
        </div>
    );
  };