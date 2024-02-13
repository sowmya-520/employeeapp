import EmployeeDOB from "./EmployeeDOB";
function Employeeitem(props){
    return(
        <div class="empdata">
            <h2>{props.name}</h2>
            <div>
                <EmployeeDOB date={props.date}/>
                <div>{props.experience}</div>
            </div>
        </div>
    )
}
export default Employeeitem;