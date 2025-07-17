
import Card from "../components/Card"
import Button from "../components/Button"
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Book Now" style="text-base rounded-lg" />
        <Card />
        <Button title="Book Tomorrow" style="text-sm rounded-sm" />
        <Card />
        <Button title="Book Later" style="text-xs rounded-none" />
      </div>
    )
  }
  export default Landing