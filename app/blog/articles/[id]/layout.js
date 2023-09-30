export default function Layout({ params: { id }, post, topic, abc }){
	let conditionalRoute = id === 'asdf' ? topic : post;
	conditionalRoute = id === 'abc' ? abc : conditionalRoute;
	return <div>{conditionalRoute}</div>;
}