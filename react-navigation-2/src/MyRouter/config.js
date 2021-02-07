export const Routes = [
	{
		path: ["/", "home"],
		exact: true,
		component: "Home",
	},
	{
		path: ["/home", "home"],
		component: "Home"
	},
	{
		path: ["/posts", "posts"],
		component: "Posts"
	},
	{
		path: ["/post/:id", "post"],
		component: "Post"
	},
	{
		path: ["/about", "about"],
		component: "About"
	}
];