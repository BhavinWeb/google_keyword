<template>
	<div class="h-screen w-screen overflow-x-hidden">
		<div class="flex gap-x-4">
			<!--	Sidebar		-->

			<aside aria-label="Sidebar" class="w-64">
				<div class="px-3 py-4 overflow-y-auto h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
					<ul class="space-y-2">
						<li>
							<a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							   href="#">
								<svg aria-hidden="true"
									 class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
									<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
								</svg>
								<span class="ml-3">Dashboard</span>
							</a>
						</li>
						<li>
							<button aria-controls="dropdown-example"
									class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									data-collapse-toggle="dropdown-example" type="button">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Main</span>
								<svg class="w-6 h-6" fill="currentColor" sidebar-toggle-item viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
							<ul id="dropdown-example" class="hidden py-2 space-y-2">
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Dashboard</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Lessons</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">My
										Account</a>
								</li>
							</ul>
						</li>
						<li>
							<button aria-controls="dropdown-example"
									class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									data-collapse-toggle="dropdown-example" type="button">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 text-left whitespace-nowrap"
									  sidebar-toggle-item>Keywords</span>
								<svg class="w-6 h-6" fill="currentColor" sidebar-toggle-item viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
							<ul id="dropdown-example" class="hidden py-2 space-y-2">
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Search
										Keywords</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Search
										Domains</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Import
										Keywords</a>
								</li>
							</ul>
						</li>
						<li>
							<button aria-controls="dropdown-example"
									class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									data-collapse-toggle="dropdown-example" type="button">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 text-left whitespace-nowrap"
									  sidebar-toggle-item>My Databases</span>
								<svg class="w-6 h-6" fill="currentColor" sidebar-toggle-item viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
							<ul id="dropdown-example" class="hidden py-2 space-y-2">
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Cache
										Database</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Live
										Database</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Datatables</a>
								</li>
							</ul>
						</li>
						<li>
							<button aria-controls="dropdown-example"
									class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									data-collapse-toggle="dropdown-example" type="button">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
									<path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 text-left whitespace-nowrap"
									  sidebar-toggle-item>Analysis</span>
								<svg class="w-6 h-6" fill="currentColor" sidebar-toggle-item viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
							<ul id="dropdown-example" class="hidden py-2 space-y-2">
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">Top
										Domains</a>
								</li>
							</ul>
						</li>
						<li>
							<button aria-controls="dropdown-example"
									class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									data-collapse-toggle="dropdown-example" type="button">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 text-left whitespace-nowrap"
									  sidebar-toggle-item>My Searches</span>
								<svg class="w-6 h-6" fill="currentColor" sidebar-toggle-item viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
							<ul id="dropdown-example" class="hidden py-2 space-y-2">
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">My
										History</a>
								</li>
								<li>
									<a class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
									   href="#">My
										Lists</a>
								</li>
							</ul>
						</li>
						<!--						<li>
													<a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
														<svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
														<span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
														<span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
													</a>
												</li>-->

					</ul>
					<ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
						<li>
							<a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							   href="#">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke-linecap="round" stroke-linejoin="round"
										  stroke-width="2"></path>
								</svg>
								<span class="flex-1 ml-3 whitespace-nowrap">Log out</span>
							</a>
						</li>
					</ul>
					<div class="flex-grow"></div>
					<div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
						<div class="flex items-center mb-3">
							<span
								class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
							<button aria-label="Close"
									class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
									data-collapse-toggle="dropdown-cta" type="button">
								<span class="sr-only">Close</span>
								<svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path clip-rule="evenodd"
										  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										  fill-rule="evenodd"></path>
								</svg>
							</button>
						</div>
						<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
							<!--							Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.-->
							View Beta Futures
						</p>
						<a class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
						   href="#">Turn Beta Futures Off<!--Turn new navigation off--></a>
					</div>
				</div>
			</aside>

			<!--			<div
							:class="isOpen ? 'w-60' : 'w-40'"
							class="flex flex-col h-screen p-3 duration-300 bg-primary-800 shadow"
						>
							<div class="space-y-4">
						&lt;!&ndash;	Dashboard Link			&ndash;&gt;
								<div class="flex items-center justify-between">
									<h2 class="text-xl font-bold text-white">K Planner</h2>
									<button @click="isOpen = !isOpen">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6 text-white"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
											/>
										</svg>
									</button>
								</div>
						&lt;!&ndash;	Search Bar				&ndash;&gt;
								<div class="relative">
								<span
									class="absolute inset-y-0 left-0 flex items-center py-4"
								>
									<button
										type="submit"
										class="p-2 focus:outline-none focus:ring"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
											/>
										</svg>
									</button>
								</span>
									<input
										type="search"
										name="Search"
										placeholder="Search..."
										class="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
									/>
								</div>
						&lt;!&ndash;	Sidebar Menu Links		&ndash;&gt;
								<div class="flex-1">
									<ul class="pt-2 pb-4 space-y-1 text-sm">
										<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
													/>
												</svg>

												<span class="text-gray-100">Home</span>
											</a>
										</li>
										<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
													/>
												</svg>

												<span class="text-gray-100">Home</span>
											</a>
										</li>
										<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
													/>
												</svg>

												<span class="text-gray-100">Home</span>
											</a>
										</li>
										<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
													/>
												</svg>

												<span class="text-gray-100">Home</span>
											</a>
										</li>
			&lt;!&ndash;							<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
													/>
												</svg>

												<span class="text-gray-100">Inbox</span>
											</a>
										</li>
										<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
													/>
												</svg>

												<span class="text-gray-100"> Orders </span>
											</a>
										</li>&ndash;&gt;
										<li class="rounded-sm border-b flex h-12 items-center border-gray-400">
											<a
												href="#"
												class="flex items-center p-2 space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
													/>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>

												<span class="text-gray-100"> Settings </span>
											</a>
										</li>
										<li class="rounded-sm flex h-12 items-center">
											<button
												href="#"
												class="flex items-center border border-primary bg-primary font-semibold 	 text-white p-2 w-full space-x-3 rounded-md"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-gray-100"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
													/>
												</svg>

												<span class="text-gray-100"> Logout </span>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>-->
			<!--	Content		-->
			<div class="w-full mx-auto pr-4">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainLayout",
	data() {
		return {
			isOpen: true
		}
	},
	updated() {
		const recaptchaScript = document.createElement("script");
		recaptchaScript.setAttribute(
			"src",
			"https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"
		);
		document.head.appendChild(recaptchaScript);
	},
	mounted() {
		const recaptchaScript = document.createElement("script");
		recaptchaScript.setAttribute(
			"src",
			"https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"
		);
		document.head.appendChild(recaptchaScript);
	},
}
</script>

<style scoped>

</style>