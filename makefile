dev: 
	bun run dev

start-nginx:
	docker run --rm -p 80:80 --network=host -v /Users/evgenijcervev/Desktop/work/anime-website/nextjs-client/nginx.conf:/etc/nginx/nginx.conf -d nginx