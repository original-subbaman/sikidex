
import "../styles/Subtitle.css";

interface SubTitleProps{
    title: string,
}

export const SubTitle = ({title}: SubTitleProps) =>{
    return <div className="subtitle">
        <h1>{title}</h1>
        </div>
}