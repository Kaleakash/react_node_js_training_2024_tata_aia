// atoms 
export const Label = ({children})=><label>{children}</label>
const Input = (props)=><input type={props.type} name={props.name} placeholder={props.msg}/>
const Button = (props)=><input type={props.b1} value={props.b2}/>
const Link = (props)=><a href={props.name}>{props.name}</a>
// Molecules 
const SearchBar = ()=> (
    <div>
        <Input type="search" msg="Search...."/>
        <Button b1="button" b2="Search Data"></Button>
    </div>
)

//Organism
const Header = ()=> (
    <div>
        <Link name="Aboutus"></Link>|
        <Link name="Contactus"></Link>|
        <Link name="Login"></Link>|
        <Link name="Feedback"></Link>
    </div>
)

function Form() {
    return(
        <div>
        <form>
         <Label>First Name</Label>
         <Input type="text" name="fname" msg="Plz Enter the fname"/> <br/>
         <Label>Last Name</Label>
         <Input type="text" name="lname" msg="Plz Enter the lname"/>   <br/>
         <Label>Gender</Label>
         <Input type="radio" name="gender" value="male"/> Male 
         <Input type="radio" name="gender" value="female"/>Female<br/>
         <Button b1="submit" b2="SignIn"></Button>
         <Button b1="reset" b2="reset"></Button>
        </form>
        
        </div>
    )
}
// Template 
function Home() {
    return(
        <div>
            <Header></Header>
            <h2>Home</h2>
            <SearchBar></SearchBar>
            <Form/>
        </div>
    )
}

export default Home;