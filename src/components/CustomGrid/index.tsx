import { Card } from 'antd';
import { NO_DATA_FOUND } from '../../constants/displayMessage';
import { Breeds } from '../../constants/types';

const { Meta } = Card;

interface Props {
	dogBreeds: Breeds[];
}

export const CustomGrid = ( { dogBreeds }: Props) => {
	return (
		<div className="grid-container grid-container--fit">
			{Boolean(dogBreeds.length) ? 
				dogBreeds.map((breed: Breeds, index: number) => {
					const { image, name, bred_for, life_span, origin } = breed;
					
					return (
						<Card
							key={index}
							className={`grid-element ${index} w-64`}
							hoverable
							cover={image ? <img className='h-40' alt={image.id} src={image.url} /> : null}
						>
							<Meta title={name} description={bred_for} />
							<p className='mt-1'> <Meta title={origin} /> </p>
							<p className='mt-1'> <Meta title={life_span} /> </p>
						</Card>
					)})
				:
					<Card
						className="grid-element w-64"
						hoverable	
					>
						{NO_DATA_FOUND}
					</Card>
				}
		</div>
	)
}
