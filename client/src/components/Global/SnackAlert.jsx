import { Transition } from '@headlessui/react';
import { StopIcon, XCircleIcon } from '@heroicons/react/20/solid';
import {
	CheckCircleIcon,
	InformationCircleIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useEffect, useState } from 'react';
import { useAlert } from '../../context/AlertContext';

export default function SnackAlert({ variant, message }) {
	const { show, setShow } = useAlert();
	const [color, setColor] = useState('');
	const [bgColor, setBgColor] = useState('');
	function getIcon() {
		switch (variant) {
			case 'error':
				return (
					<XCircleIcon
						className='h-6 w-6 text-rose-400'
						aria-hidden='true'
					/>
				);
			case 'success':
				return (
					<CheckCircleIcon
						className='h-6 w-6 text-green-400'
						aria-hidden='true'
					/>
				);
			case 'info':
				return (
					<InformationCircleIcon
						className='h-6 w-6 text-indigo-400'
						aria-hidden='true'
					/>
				);
			case 'warning':
				return (
					<StopIcon
						className='h-6 w-6 text-yellow-400'
						aria-hidden='true'
					/>
				);
			default:
				return null;
		}
	}
	useEffect(() => {
		switch (variant) {
			case 'error':
				setColor('text-rose-50 dark:text-white');
				setBgColor('bg-rose-500 dark:bg-rose-500');
				return;
			case 'success':
				setColor('text-green-50');
				setBgColor('bg-green-900 dark:bg-green-700');
				break;
			case 'info':
				setColor('text-indigo-50');
				setBgColor('bg-indigo-900 dark:bg-indigo-700');
				break;
			case 'warning':
				setColor('text-yellow-50');
				setBgColor('bg-yellow-900 dark:bg-yellow-700');
				break;
			default:
				setColor('text-gray-50');
				setBgColor('bg-gray-900 dark:bg-gray-700');
		}
		return;
	}, [variant]);
	return (
		<div>
			{/* Global notification live region, render this permanently at the end of the document */}
			<div
				aria-live='assertive'
				className='pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6'
			>
				<div className='flex w-full flex-col items-top space-y-4 sm:items-end'>
					{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
					<Transition
						show={show}
						appear={true}
						as={Fragment}
						enter='transform ease-out duration-300 transition'
						enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
						enterTo='translate-y-0 opacity-100 sm:translate-x-0'
						leave='transition ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div
							className={`${bgColor} ${color} pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
						>
							<div className='p-4'>
								<div className='flex'>
									<div className='flex-shrink-0'>
										{/* icon */}
										{getIcon(variant)}
									</div>
									<div className='ml-3 w-0 flex-1 pt-0.5 items-baseline'>
										<p className={(color, 'mt-1 text-sm font-bold')}>
											{message}
										</p>
									</div>
									<div className='ml-4 flex flex-shrink-0'>
										<button
											type='button'
											id='close-snackbar'
											className={
												(color,
												bgColor,
												'inline-flex rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')
											}
											onClick={() => {
												setShow(false);
											}}
										>
											<span className='sr-only'>Close</span>
											<XMarkIcon
												className='h-5 w-5 items-baseline'
												aria-hidden='true'
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	);
}
