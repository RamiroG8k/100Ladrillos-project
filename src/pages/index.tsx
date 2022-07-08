// Common
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
// Components
import { Navbar, ProgressButtons, ProgressPoints } from '@components/index';
import { useState } from 'react';
import { EmailStep, PhoneStep, PersonalInfo, Success } from '@components/signup';
// Context
import { SignupContext } from 'context';

const Home: NextPage = () => {
	const [step, setStep] = useState<number>(1);

	const MultiStepForm = () => {
		switch (step) {
			case 1:
				return <EmailStep />;
			case 2:
				return <PhoneStep />;
			case 3:
				return <PersonalInfo />;
			default:
				return <Success />;
		}
	}

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-white w-screen h-screen">
				<Navbar className="fixed z-10" />
				<SignupContext.Provider value={{ step, setStep }}>
					<div className="flex flex-col lg:flex-row h-full">
						<div className="flex max-w-[524px] bg-primary h-full">
							<Image src="/assets/img/Background-img-angel.webp" priority
								alt="100 Ladrillos logotipo" width={1572} height={1809}
								objectFit="cover" />
						</div>
						<div className="flex flex-1 justify-center items-center">
							<form onSubmit={(e) => e.preventDefault()}
								className="flex flex-col gap-6 max-w-[320px]">
								<MultiStepForm />
								<ProgressButtons />
								<ProgressPoints/>
							</form>
						</div>
					</div>
				</SignupContext.Provider>
			</div>
		</>
	)
}

export default Home
