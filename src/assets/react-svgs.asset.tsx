import * as React from 'react';
import { ReactElement } from 'react';

export interface SVGSModel {
	[icon: string]: ReactElement<SVGElement>;
}

// tslint:disable
export const SVGS = {
	iEatWhat: (
		<svg width="100%" height="100%" viewBox="0 0 333 115" xmlns="http://www.w3.org/2000/svg">
			<path d="m120.58 94.25c1.77-0.91 3.43-2 4.97-3.28h0.21l0.46 3.84h4.5v-19.75c0-4.02-0.88-7.24-2.65-9.65-1.76-2.41-4.61-3.61-8.55-3.61-2.61 0-5 0.45-7.16 1.36-2.17 0.91-4 1.84-5.5 2.82 0 0 2.12 3.77 2.12 3.77 1.28-0.88 2.74-1.67 4.38-2.38 1.63-0.71 3.38-1.06 5.23-1.06 1.33 0 2.42 0.23 3.29 0.69 0.86 0.47 1.53 1.07 2.02 1.82 0.48 0.76 0.83 1.62 1.02 2.59 0.21 0.97 0.3 1.97 0.3 2.99-6.89 0.75-11.91 2.06-15.04 3.94-3.14 1.88-4.71 4.59-4.71 8.12 0 2.92 0.9 5.17 2.69 6.76 1.78 1.59 4.03 2.39 6.72 2.39 2.03 0 3.93-0.46 5.7-1.36zm-8.15-4.21c-1.1-0.79-1.66-2.12-1.66-3.98 0-1.01 0.26-1.95 0.77-2.81 0.5-0.87 1.32-1.63 2.45-2.29s2.61-1.24 4.44-1.72c1.83-0.49 4.1-0.91 6.79-1.27v8.95c-1.54 1.42-3 2.49-4.37 3.22s-2.83 1.09-4.38 1.09c-1.59 0-2.93-0.39-4.04-1.19zm40.74 5.2c1.03-0.24 1.99-0.52 2.88-0.82l-1.06-4.11c-0.53 0.22-1.13 0.42-1.79 0.59-0.67 0.18-1.28 0.27-1.86 0.27-1.86 0-3.14-0.54-3.87-1.63-0.74-1.08-1.1-2.61-1.1-4.6v-17.9h8.69v-4.44h-8.69v-9.02h-4.57l-0.67 9.02-5.03 0.33v4.11h4.77v17.83c0 1.59 0.16 3.05 0.47 4.38 0.3 1.32 0.82 2.45 1.55 3.37 0.73 0.94 1.68 1.66 2.86 2.19 1.16 0.53 2.61 0.8 4.33 0.8 1.02 0 2.05-0.12 3.09-0.37zm103.75-0.43v-17.5c1.22-1.22 2.31-2.15 3.27-2.78 0.97-0.63 2.08-0.95 3.34-0.95 1.58 0 2.75 0.51 3.48 1.52s1.09 2.66 1.09 4.94v14.77h4.08v-15.31c0-3.12-0.59-5.47-1.77-7.06s-3.04-2.38-5.59-2.38c-1.69 0-3.17 0.38-4.43 1.16s-2.46 1.72-3.63 2.81l0.15-4.97v-9.65h-4.08v35.4h4.09zm32.8-0.42c1.32-0.68 2.57-1.5 3.73-2.46h0.15l0.35 2.88h3.37v-14.81c0-3.02-0.66-5.43-1.98-7.24-1.33-1.8-3.46-2.7-6.42-2.7-1.95 0-3.74 0.34-5.37 1.01-1.62 0.68-2.99 1.39-4.12 2.12l1.59 2.83c0.96-0.66 2.05-1.26 3.28-1.79 1.22-0.53 2.54-0.8 3.93-0.8 0.99 0 1.81 0.18 2.46 0.53 0.64 0.34 1.15 0.8 1.52 1.36 0.36 0.57 0.62 1.21 0.77 1.94 0.14 0.73 0.22 1.48 0.22 2.24-5.17 0.57-8.94 1.55-11.28 2.96-2.36 1.41-3.54 3.44-3.54 6.09 0 2.19 0.67 3.88 2.02 5.07 1.34 1.19 3.02 1.79 5.05 1.79 1.52 0 2.94-0.34 4.27-1.02zm-6.11-3.16c-0.83-0.59-1.25-1.59-1.25-2.98 0-0.76 0.2-1.47 0.58-2.11 0.38-0.65 0.99-1.22 1.84-1.72 0.84-0.49 1.95-0.92 3.33-1.29 1.38-0.36 3.07-0.68 5.09-0.94v6.71c-1.16 1.06-2.25 1.86-3.28 2.41s-2.12 0.82-3.28 0.82c-1.19 0-2.21-0.3-3.03-0.9zm30.56 3.91c0.77-0.19 1.49-0.39 2.16-0.63l-0.81-3.08c-0.39 0.17-0.84 0.32-1.33 0.45-0.5 0.13-0.96 0.2-1.39 0.2-1.39 0-2.37-0.41-2.92-1.22-0.54-0.81-0.81-1.96-0.81-3.46v-13.42h6.51v-3.33h-6.51v-6.76h-3.43s-0.51 6.76-0.51 6.76l-3.77 0.25v3.08h3.58v13.38c0 1.19 0.11 2.28 0.35 3.28 0.22 0.99 0.62 1.83 1.16 2.53 0.55 0.7 1.27 1.25 2.14 1.64 0.88 0.4 1.97 0.6 3.26 0.6 0.76 0 1.53-0.09 2.32-0.27zm-68.52-55.85v48.35c0 4.78-2.47 7.22-7.42 7.32 0 0-18.19-0.03-18.19-0.03-0.05-0.09-0.07-0.18-0.12-0.26-1.63-2.95-3.95-5.23-6.88-6.79-2.75-1.48-5.66-2.23-8.62-2.23-3.01 0-5.94 0.74-8.7 2.22-2.93 1.57-5.24 3.85-6.88 6.8-0.04 0.07-0.06 0.14-0.1 0.2l-3.71-0.01c-14.54 0-21.82-7.43-21.82-22.3v-33.47c0-4.85 2.42-7.27 7.28-7.27 4.85 0 7.27 2.45 7.27 7.37v33.66c0 4.98 2.47 7.47 7.42 7.47h12.08l-0.1-41.23c0-4.85 2.43-7.27 7.28-7.27 4.84 0 7.26 2.46 7.26 7.37v33.66c0 4.98 2.46 7.47 7.38 7.47h12.03v-41.03c0-4.91 2.46-7.37 7.37-7.37 4.78 0 7.18 2.46 7.17 7.37zm-227.73-7.27c1.19 0 2.35 0.31 3.49 0.92 1.14 0.6 2.02 1.49 2.67 2.63 0.64 1.16 0.96 2.37 0.96 3.61 0 1.22-0.31 2.4-0.94 3.54s-1.51 2.02-2.63 2.65c-1.14 0.62-2.33 0.93-3.55 0.93-1.25 0-2.43-0.31-3.55-0.93-1.12-0.63-2-1.51-2.65-2.65-0.64-1.14-0.95-2.32-0.95-3.54 0-1.24 0.31-2.45 0.95-3.61 0.65-1.14 1.54-2.03 2.67-2.63 1.14-0.61 2.32-0.92 3.53-0.92zm7.24 15.32c0.39 1.01 0.62 2.19 0.62 3.61v36.63c0 4.88-2.37 7.31-7.12 7.31-4.87 0-7.3-2.43-7.3-7.31v-36.63c0-1.21 0.15-2.26 0.45-3.19 0.26 0.18 0.5 0.36 0.77 0.5 1.75 0.98 3.63 1.48 5.6 1.48 1.94 0 3.81-0.49 5.56-1.46 0.51-0.28 0.98-0.6 1.42-0.94zm66.1 47.55h-48.36c-4.78 0-7.22-2.48-7.31-7.42l0.03-18.19c0.08-0.05 0.17-0.08 0.26-0.13 2.94-1.63 5.22-3.94 6.78-6.87 1.49-2.76 2.23-5.67 2.23-8.63 0-3.01-0.74-5.94-2.22-8.7-1.57-2.93-3.85-5.24-6.79-6.88-0.08-0.04-0.15-0.06-0.21-0.09l0.01-3.72c0-14.54 7.43-21.81 22.3-21.81h33.47c4.85 0 7.27 2.42 7.27 7.27s-2.45 7.28-7.36 7.28h-33.67c-4.97 0-7.46 2.47-7.46 7.41v12.08l41.22-0.1c4.85 0 7.27 2.43 7.27 7.28s-2.45 7.27-7.36 7.27h-33.67c-4.97 0-7.46 2.46-7.46 7.38v12.02h41.03c4.9 0 7.36 2.46 7.36 7.37 0 4.78-2.46 7.18-7.36 7.18z" fill="none" stroke="#000"/>
		</svg>
	),
	iEatFork: (
		<svg id="iEatWhatForkLogo" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 612 792">
			<path className="head" fill="#D95227" d="M78.547,84.339c-3.32,0-4.98,1.66-4.98,4.98v27.719h-8.125c-3.321,0-4.981-1.682-4.981-5.045V89.253   c0-3.32-1.638-4.98-4.914-4.98c-3.276,0-4.915,1.638-4.915,4.915l0.065,27.85h-8.158c-3.342,0-5.013-1.682-5.013-5.045V89.253   c0-3.32-1.638-4.98-4.915-4.98c-3.276,0-4.915,1.638-4.915,4.915v22.607c0,10.048,4.915,15.072,14.744,15.072l2.506,0.004   c0.023-0.043,0.04-0.09,0.064-0.134c1.107-1.991,2.67-3.535,4.646-4.593c1.864-0.997,3.842-1.503,5.879-1.503   c2.004,0,3.965,0.506,5.829,1.504c1.976,1.057,3.539,2.602,4.645,4.591c0.032,0.057,0.053,0.117,0.083,0.174l12.291,0.022   c3.342-0.065,5.013-1.715,5.013-4.947V89.319C83.396,85.999,81.78,84.339,78.547,84.339z"/>
			<path className="circle" fill="#D95227" d="M51.773,126.099c-1.212,0.648-2.159,1.588-2.842,2.816c-0.683,1.229-1.024,2.509-1.024,3.84   c0,1.297,0.341,2.551,1.024,3.764c0.683,1.211,1.622,2.149,2.816,2.815c1.194,0.666,2.458,0.999,3.788,0.999   c1.298,0,2.551-0.333,3.764-0.999c1.211-0.666,2.15-1.604,2.816-2.815c0.666-1.212,0.998-2.467,0.998-3.764   c0-1.331-0.342-2.611-1.024-3.84c-0.683-1.228-1.629-2.167-2.841-2.816c-1.211-0.648-2.448-0.973-3.712-0.973   C54.239,125.126,52.985,125.45,51.773,126.099z"/>
			<path className="body" fill="#28130C" d="M61.459,143.264c-1.875,1.031-3.868,1.553-5.923,1.553c-2.099,0-4.107-0.527-5.972-1.566   c-0.286-0.159-0.546-0.349-0.814-0.529c-0.322,0.97-0.483,2.101-0.483,3.392v49.495c0,5.188,2.594,7.782,7.782,7.782   c5.051,0,7.578-2.594,7.578-7.782v-49.495c0-1.507-0.239-2.769-0.666-3.838C62.49,142.636,61.993,142.971,61.459,143.264z"/>
		</svg>
	),
	twitter: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>twitter</title>
			<path fill="#1da1f2" d="M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397l-0.063-0.027z"/>
		</svg>
	),
	google: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>google</title>
			<path fill="#4285f4" d="M16.32 13.713v5.487h9.075c-0.367 2.353-2.741 6.899-9.075 6.899-5.46 0-9.919-4.519-9.919-10.099s4.46-10.099 9.919-10.099c3.107 0 5.188 1.319 6.38 2.465l4.339-4.184c-2.787-2.601-6.4-4.183-10.719-4.183-8.847 0-16 7.153-16 16s7.153 16 16 16c9.235 0 15.36-6.492 15.36-15.635 0-1.051-0.113-1.853-0.252-2.652h-15.108z"/>
		</svg>
	),
	hipster: (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
			<title>hipster</title>
			<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2-0.895 2-2 2-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2-0.895 2-2 2-2-0.895-2-2z"/>
			<path d="M21.121 16.879c-1.172-1.172-3.071-1.172-4.243 0s-1.172 3.071 0 4.243c0.038 0.038 0.076 0.074 0.115 0.109 2.704 2.453 9.006-0.058 9.006-3.23-1.938 1.25-3.452 0.306-4.879-1.121z"/>
			<path d="M10.879 16.879c1.172-1.172 3.071-1.172 4.243 0s1.172 3.071 0 4.243c-0.038 0.038-0.076 0.074-0.115 0.109-2.704 2.453-9.006-0.058-9.006-3.23 1.938 1.25 3.452 0.306 4.879-1.121z"/>
		</svg>
	),
	cross: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>cross</title>
			<path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"/>
		</svg>
	),
	pencil: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>pencil</title>
			<path d="M30.173 7.542l-0.314 0.314-5.726-5.729 0.313-0.313c0 0 1.371-1.813 3.321-1.813 0.859 0 1.832 0.353 2.849 1.37 3.354 3.354-0.443 6.171-0.443 6.171zM27.979 9.737l-19.499 19.506-8.48 2.757 2.756-8.485v-0.003h0.002l19.496-19.505 0.252 0.253M2.76 29.239l4.237-1.219-2.894-3.082-1.343 4.301z"/>
		</svg>
	),
	share: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>share</title>
			<path d="M8 20c0 0 1.838-6 12-6v6l12-8-12-8v6c-8 0-12 4.99-12 10zM22 24h-18v-12h3.934c0.315-0.372 0.654-0.729 1.015-1.068 1.374-1.287 3.018-2.27 4.879-2.932h-13.827v20h26v-8.395l-4 2.667v1.728z"/>
		</svg>
	),
	food: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>food</title>
			<path d="M29.5 21h-2.691c-0.045-0.239-0.1-0.473-0.16-0.706l4.799-2.399c0.494-0.247 0.693-0.848 0.447-1.342-0.248-0.494-0.846-0.692-1.342-0.447l-4.578 2.288c-1.746-3.768-5.555-6.394-9.975-6.394-5.382 0-9.865 3.888-10.809 9h-2.691c-1.378 0-2.5 1.121-2.5 2.5 0 0.49 0.18 0.963 0.505 1.329l3.495 3.932v0.739c0 1.379 1.122 2.5 2.5 2.5h19c1.379 0 2.5-1.121 2.5-2.5v-0.739l3.494-3.932c0.326-0.366 0.506-0.839 0.506-1.329 0-1.379-1.121-2.5-2.5-2.5zM25.799 21h-0.562l0.498-0.25c0.019 0.084 0.046 0.165 0.064 0.25zM16 13c4.029 0 7.5 2.4 9.082 5.841l-0.891 0.445c-1.416-3.115-4.546-5.286-8.191-5.286-4.282 0-7.859 2.993-8.77 7h-1.028c0.929-4.559 4.969-8 9.798-8zM20.576 21c-0.773-1.763-2.531-3-4.576-3s-3.802 1.237-4.576 3h-1.074c0.826-2.326 3.043-4 5.65-4 2.465 0 4.588 1.496 5.508 3.627l-0.932 0.373zM16 20c-0.883 0-1.67 0.391-2.22 1h-1.224c0.694-1.189 1.97-2 3.444-2 1.473 0 2.75 0.811 3.443 2h-1.225c-0.548-0.609-1.335-1-2.218-1zM16 16c-3.165 0-5.842 2.112-6.705 5h-1.032c0.892-3.444 4.017-6 7.737-6 3.246 0 6.043 1.948 7.295 4.734l-0.893 0.446c-1.088-2.457-3.547-4.18-6.402-4.18zM26 28v1.5c0 0.276-0.225 0.5-0.5 0.5h-19c-0.276 0-0.5-0.224-0.5-0.5v-1.5l-4-4.5c0-0.276 0.224-0.5 0.5-0.5h27c0.275 0 0.5 0.224 0.5 0.5l-4 4.5zM7.977 11.712c-0.007-0.014-0.012-0.027-0.018-0.042-0.519-1.253-0.003-2.482 0.463-3.591 0.441-1.052 0.832-1.984 0.428-2.893-0.002-0.004-0.003-0.008-0.005-0.012-0.001-0.003-0.002-0.006-0.003-0.009-0.001-0.002-0.001-0.004-0.001-0.006-0.020-0.053-0.032-0.109-0.032-0.169 0-0.27 0.219-0.49 0.49-0.49 0.208 0 0.385 0.13 0.456 0.313 0.558 1.271 0.051 2.521-0.422 3.647-0.438 1.042-0.794 2.010-0.419 2.892 0.002 0.007 0.002 0.013 0 0.020 0.011 0.040 0.018 0.082 0.018 0.125 0 0.277-0.225 0.503-0.502 0.503-0.194 0-0.36-0.11-0.443-0.27-0.001 0-0.002 0-0.002 0-0.003-0.006-0.005-0.012-0.008-0.018zM20.154 11.566c-0.006-0.013-0.011-0.027-0.016-0.040-0.519-1.253-0.004-2.483 0.461-3.592 0.442-1.052 0.832-1.984 0.428-2.893 0-0.004-0.002-0.008-0.004-0.012s-0.002-0.006-0.004-0.009c0-0.002 0-0.004 0-0.006-0.019-0.053-0.033-0.109-0.033-0.169 0-0.27 0.22-0.49 0.49-0.49 0.209 0 0.385 0.129 0.457 0.313 0.558 1.271 0.051 2.521-0.422 3.647-0.438 1.042-0.793 2.010-0.42 2.892 0.004 0.007 0.004 0.013 0.002 0.020 0.010 0.040 0.018 0.082 0.018 0.125 0 0.277-0.227 0.503-0.504 0.503-0.193 0-0.359-0.111-0.443-0.271h-0.002c-0.002-0.006-0.004-0.012-0.008-0.018zM15.019 7.212c-0.007-0.014-0.012-0.027-0.019-0.041-0.52-1.253-0.004-2.483 0.462-3.592 0.441-1.052 0.832-1.984 0.428-2.893-0.001-0.004-0.003-0.008-0.004-0.012-0.001-0.003-0.002-0.006-0.003-0.009-0.001-0.002-0.001-0.004-0.001-0.006-0.020-0.053-0.032-0.109-0.032-0.169 0-0.27 0.22-0.49 0.49-0.49 0.209 0 0.385 0.13 0.457 0.314 0.558 1.271 0.051 2.521-0.422 3.647-0.438 1.042-0.794 2.010-0.419 2.892 0.002 0.007 0.002 0.013 0 0.020 0.011 0.040 0.018 0.082 0.018 0.125 0 0.277-0.225 0.503-0.502 0.503-0.193 0-0.359-0.111-0.443-0.271-0.001 0-0.002 0-0.002 0-0.003-0.006-0.005-0.012-0.008-0.018z"/>
		</svg>
	),
	search: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>search</title>
			<path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
		</svg>
	),
	menu: (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
			<title>menu</title>
			<path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"/>
		</svg>
	)
};
