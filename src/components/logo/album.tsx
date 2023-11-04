import Image from 'next/image';
import albumImage from '../../../public/9288713.jpg';
import albumImage2 from '../../../public/9289231.jpg';

export const album = () => {
    return (
        <div>
           <Image src={albumImage} alt="album" />
        </div>
    )
}

export const album2 = () => {
    return (
        <div>
           <Image src={albumImage2} alt="album" />
        </div>
    )
}