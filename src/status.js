import Form from "./quizForm";

let statuses = [
    'empty',
    'typing',
    'submitting',
    'success',
    'error'
];

export default function status(){
    return(
        <>
            {statuses.map(status => (
                <section key={status}>
                    <h4>Form({status}):</h4>
                    <Form status={status}/>
                </section>

            ))}
        </>
    );
}