export function generateStaticParams(){
	return [
		{ params: { id: 'some-test' }}
	]
}

export function generateMetadata({ params: { id }}){
	return { title: id };
}

export default function Article({ params: { id } }) {
	return <div>{id}</div>;
}