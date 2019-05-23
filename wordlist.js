// Define the lists of words for the generator
//
// First is the list of first words
// Second is either a list of second words for each first word, or a string to point to another first word to use the list of

const wordlist =
[
	[
		'is',
		'are',
		'was',
		'did',
		'would',
		'might',
		'will',
		'can',
		'could',
		'how',
		'when',
		'where',
		'why',
		'who',
		'what',
		'which',
	],

	{
		'is'   : ['he', 'she', 'it'],
		'did'  : ['they', 'their', 'we', 'the', 'any', 'my', 'his', 'her'],
		'how'  : ['is', 'are', 'was', 'did', 'would', 'might', 'will', 'can', 'could', 'were'],
		'which': ['one', 'friend', 'year', 'day', 'goat 🐐'],
		'was'  : 'is',
		'were' : 'are',
		'are'  : 'did',
		'would': 'did',
		'might': 'did',
		'will' : 'did',
		'can'  : 'did',
		'could': 'did',
		'when' : 'how',
		'where': 'how',
		'why'  : 'how',
		'who'  : 'how',
		'what' : 'how',
	}
]
