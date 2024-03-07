import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function FlashCardSkeleton() {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center'>
			<Card className='p-6 md:w-3/4 flex flex-col items-center aspect-[16/10] shadow-md z-10'>
				<CardContent className='flex flex-col flex-1 w-full justify-center space-y-2'>
					<Skeleton className='w-full h-6' />
					<Skeleton className='w-full h-6' />
					<Skeleton className='w-2/3 h-6' />
				</CardContent>
				<CardFooter className=''>
					<Button disabled>Reveal answer</Button>
				</CardFooter>
			</Card>
			<div className='w-2/3 aspect-[16/10] h-6 shadow-md rounded-md -mt-2 border' />
		</div>
	)
}