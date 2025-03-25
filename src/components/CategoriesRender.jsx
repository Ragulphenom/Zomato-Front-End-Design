import Categories from './Categories';
const allImages = import.meta.glob('../assets/images/*.{svg|jpg|png}', {
	eager: true,
	query: 'url',
});

function RenderAllCategories() {
	const imageUrl = Object.entries(allImages);
	return (
		<>
			{imageUrl.map((image, index) => (
				<Categories sourceImage={image} keys={index} />
			))}
		</>
	);
}

export default RenderAllCategories;
