import FeedBackSlides from "./FeedBackSlide/FeedBackSlides";
import { SlideObjectInterface } from "@/app/interfaces/interfases";
import { promises as fs } from 'fs';

export default async function FeedBackSlider() {
    const file = await fs.readFile(process.cwd() + '/src/app/components/FeedBack/FeedBackSlider/feedBackInfo.json', 'utf8');
    const data: SlideObjectInterface[] = JSON.parse(file);
    

    return (
        <>
            <FeedBackSlides data={data} />
        </>
    )
}