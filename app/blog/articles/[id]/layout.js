export default function Layout({ params: { id }, post, topic }){
	return <div>{id === 'asdf' ? topic : post}</div>;
}