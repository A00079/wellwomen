import React, { Component, useState, useEffect } from 'react';
import './youtubeVideos.css';
import { Link } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "./YoutubeHeaderLink.js";
import Header from "./YoutubeHeader.js";
import SkeletonCard from './skeletonCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import * as Scroll from 'react-scroll';
let DirectLinkDiv = Scroll.Link;

// const API_KEY = 'AIzaSyBRkPv6tG9zDk1fJZClXA3NuOgnZURHo8M';
const API_KEY = 'AIzaSyAtu6fiJRER96wlMzjX7n7qu6JF4z6y8js';
const channelID = 'UC8KBEuXc5mdz0N5roXTbyVA';
const result = 20;

const BaseURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '5rem'
	},
	card: {
		margin: '0rem 8rem',
		boxShadow: 'none',
		[theme.breakpoints.down("sm")]: {
			margin: '0rem 1rem'
		}
		// margin: theme.spacing(2),
	},
	smallCardSkeleton: {
		maxWidth: '72%',
		flexBasis: '21%',
		cursor: 'pointer',
		[theme.breakpoints.down("sm")]: {
			maxWidth: '100%',
			flexBasis: '0%',
		}
	},
	media: {
		height: 400,
	},
}));
const YoutubeVideo = (props) => {
	const classes = useStyles();

	const [fetchingVideos, setfetchingVideos] = useState(true);
	const [videoSrc, setvideoSrc] = useState('');
	const [videoDesc, setvideoDesc] = useState('');
	const [videoTitle, setvideoTitle] = useState('');

	const [chunkVideos, setchunkVideos] = useState([]);

	const playnewvideo = (newvideourl, newvideodesc, newvideotitle) => {
		setvideoSrc(`https://www.youtube.com/embed/${newvideourl}`)
		setvideoDesc(newvideodesc)
		setvideoTitle(newvideotitle)
	}


	useEffect(() => {
		fetch(BaseURL)
			.then(rawdata => rawdata.json())
			.then((response) => {
				console.log('Response  from Youtube...', response)
				setTimeout(() => {
					setvideoSrc(`https://www.youtube.com/embed/${response.items[0].id.videoId}`)
					setvideoDesc(response.items[0].snippet.description)
					setvideoTitle(response.items[0].snippet.title)
					setchunkVideos(response.items)
					setfetchingVideos(false)
					console.log('chunkVideos', chunkVideos)
				}, 3000)
			})
			.catch((err) => setfetchingVideos(true))
	}, [])

	return (

		<React.Fragment>
			<Header
				brand="Well Woman"
				rightLinks={<HeaderLinks />}
				fixed
				color="white"
				changeColorOnScroll={{
					height: 400,
					color: "white"
				}}
			/>
			{
				fetchingVideos ? <SkeletonCard /> :
					<React.Fragment>
						<div className={classes.root} id='videoframe'>
							<Grid
								container
								direction="row"
								justify="center"
								alignItems="center"
								spacing={3}>
								<Grid item xs={12} md={12} lg={12}>
									<Card className={classes.card}>
										<CardHeader />
										<CardMedia
											component="iframe"
											alt="Diet Food"
											className={classes.media}
											height="140"
											image={videoSrc}
											title="Diet Food"
										/>
										<CardContent>

											<Typography variant="h6" className="text-black" component="p">
												{videoTitle}
											</Typography>
											<Typography variant="subtitle2" className="mt-2 text-black" component="p">
												{'Description :' + videoDesc}
											</Typography>

										</CardContent>
									</Card>
								</Grid>


								<main class="p-6 flex-1 overflow-auto col-span-2">
									<div class="border-b-4 yt-border-gray-400 mb-10 pb-10">
										<div class="text-xl font-bold mb-6">
											All Videos
							</div>
										<div class="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
											{(chunkVideos).map((item, index) => (

												// <Grid item xs={12} key={index} md={4} lg={3} className={classes.smallCardSkeleton} onClick={() => playnewvideo(item.id.videoId, item.snippet.description, item.snippet.title)}>
												// 	<Box key={index} width={210} marginRight={0.5} my={5}>

												// 		<img style={{ width: item.snippet.thumbnails.high.width, height: '200px' }} alt={item.snippet.title} src={item.snippet.thumbnails.high.url} />

												// 		<Box pr={2}>
												// 			<Typography gutterBottom variant="body2">
												// 				{item.snippet.title}
												// 			</Typography>
												// 			<Typography display="block" variant="caption" color="textSecondary">
												// 				{item.snippet.channelTitle}
												// 			</Typography>
												// 			<Typography variant="caption" color="textSecondary">
												// 				{item.snippet.publishedAt}
												// 			</Typography>
												// 		</Box>
												// 	</Box>
												// </Grid>

												<DirectLinkDiv
													to="videoframe"
													spy={true}
													smooth={true}
													offset={50}
													duration={500}
												>
													<div style={{ cursor: 'pointer' }} onClick={() => playnewvideo(item.id.videoId, item.snippet.description, item.snippet.title)}>
														<div class="relative">
															<img class="w-full" src={item.snippet.thumbnails.high.url} alt="" />
															<span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">1:40</span>
														</div>
														<div class="flex mt-4">
															<img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src={item.snippet.thumbnails.high.url} alt="" />
															<div class="text-sm w-full">
																<div class="font-bold text-line-clamp-2 mb-1 relative pr-6">
																	{item.snippet.title}
																	<button class="absolute right-0 inset-y-0 yt-text-gray-800">
																		<svg class="h-6 fill-current" viewBox="0 0 24 24">
																			<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
																		</svg>
																	</button>
																</div>
																<div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
																	{item.snippet.channelTitle}
																</div>
																<div class="yt-text-gray-500">
																	<span>{new Date(item.snippet.publishedAt).toDateString()}</span>
																</div>
															</div>
														</div>
													</div>
												</DirectLinkDiv>
											))}
										</div>
									</div>
								</main>




								{/* {(chunkVideos).map((item, index) => (

										<Grid item xs={12} key={index} md={4} lg={3} className={classes.smallCardSkeleton} onClick={() => playnewvideo(item.id.videoId,item.snippet.description,item.snippet.title)}>
											<Box key={index} width={210} marginRight={0.5} my={5}>

												<img style={{ width: item.snippet.thumbnails.high.width, height: '200px' }} alt={item.snippet.title} src={item.snippet.thumbnails.high.url} />

												<Box pr={2}>
													<Typography gutterBottom variant="body2">
														{item.snippet.title}
													</Typography>
													<Typography display="block" variant="caption" color="textSecondary">
														{item.snippet.channelTitle}
													</Typography>
													<Typography variant="caption" color="textSecondary">
														{item.snippet.publishedAt}
													</Typography>
												</Box>

											</Box>
										</Grid>
									))} */}
							</Grid>
						</div>
					</React.Fragment>
			}
		</React.Fragment>
	);
}

export default YoutubeVideo;