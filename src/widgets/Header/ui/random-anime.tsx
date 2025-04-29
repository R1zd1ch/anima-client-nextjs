import { Button } from '@/shared/components/ui'
import { Dices } from 'lucide-react'
import React from 'react'

function RandomAnimeButton() {
	//todo: получение рандомного аниме и редеректинг
	return (
		<Button variant='outline' size='icon' className='size-9'>
			<Dices></Dices>
		</Button>
	)
}

export default RandomAnimeButton
