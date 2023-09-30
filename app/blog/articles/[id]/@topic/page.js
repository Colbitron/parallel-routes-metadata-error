
export function generateMetadata({ params: { id = 'Topic Title' }}){
	const title = id === 'asdf' ? 'Topic Title' : id;
	return { title };
}

export default function SomethingDifferent(){
	return <div>Something Different</div>;
}