import Employeeitem from './Employeeitem'
function Employees(props){
    return(
        <div>
            <Employeeitem name={props.items[0].name} experience={props.items[0].experience} date={props.items[0].date}></Employeeitem>
            <Employeeitem name={props.items[1].name} experience={props.items[1].experience} date={props.items[1].date}></Employeeitem>
            <Employeeitem name={props.items[2].name} experience={props.items[2].experience} date={props.items[2].date}></Employeeitem>
            <Employeeitem name={props.items[3].name} experience={props.items[3].experience} date={props.items[3].date}></Employeeitem>

        </div>
    )
}
export default Employees;