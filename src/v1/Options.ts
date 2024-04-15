/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import {CurseForgeGetFingerprintMatchesRequestBody, CurseForgeGetFuzzyMatchesRequestBody, CurseForgeModLoaderType, CurseForgeModsSearchSortField, CurseForgeSortOrder} from './Types.js';

export interface CurseForgeGetGamesOptions {
	/** A zero based index of the first item to include in the response,  the limit is: (index + pageSize <= 10,000). */
	index?: number,
	/** The number of items to include in the response,  the default/maximum value is 50. */
	pageSize?: number,
}

export interface CurseForgeGetCategoriesOptions {
	/** A class unique id. */
	classId?: number,
	/** A flag used with gameId to return only classes. */
	classesOnly?: boolean,
}

export interface CurseForgeSearchModsOptions {
	/** Filter by section id (discoverable via Categories). */
	classId?: number,
	/** Filter by category id. */
	categoryId?: number,
	/** Filter by a list of category ids - this will override categoryId. */
	categoryIds?: string,
	/** Filter by game version string. */
	gameVersion?: string,
	/** Filter by a list of game version strings - this will override. */
	gameVersions?: string,
	/** Filter by free text search in the mod name and author. */
	searchFilter?: string,
	/** Filter by ModsSearchSortField enumeration. */
	sortField?: CurseForgeModsSearchSortField,
	/** 'asc' if sort is in ascending order, 'desc' if sort is in descending order. */
	sortOrder?: CurseForgeSortOrder,
	/** Filter only mods associated to a given modloader (Forge, Fabric ...). Must be coupled with gameVersion. */
	modLoaderType?: CurseForgeModLoaderType,
	/** Filter by a list of mod loader types - this will override modLoaderType. */
	modLoaderTypes?: string,
	/** Filter only mods that contain files tagged with versions of the given gameVersionTypeId. */
	gameVersionTypeId?: number,
	/** Filter only mods that the given authorId is a member of. */
	authorId?: number,
	/** Filter only mods that the given primaryAuthorId is the owner of. */
	primaryAuthorId?: number,
	/** Filter by slug (coupled with classId will result in a unique result). */
	slug?: string,
	/** A zero based index of the first item to include in the response,  the limit is: (index + pageSize <= 10,000). */
	index?: number,
	/** The number of items to include in the response,  the default/maximum value is 50. */
	pageSize?: number,
}

export interface CurseForgeGetModDescriptionOptions {
	raw?: boolean,
	stripped?: boolean,
	markup?: boolean,
}

export interface CurseForgeGetModFileOptions {
	/** The mod id the file belongs to. */
	modId: number,
	/** The file id. */
	fileId: number,
}

export interface CurseForgeGetModFilesOptions {
	/** Filter by game version string. */
	gameVersion?: string,
	/** ModLoaderType enumeration. */
	modLoaderType?: CurseForgeModLoaderType,
	/** Filter only files that are tagged with versions of the given gameVersionTypeId. */
	gameVersionTypeId?: number,
	/** A zero based index of the first item to include in the response,  the limit is: (index + pageSize <= 10,000). */
	index?: number,
	/** The number of items to include in the response,  the default/maximum value is 50. */
	pageSize?: number,
}

export interface CurseForgeGetModFileChangelogOptions {
	/** The mod id the file belongs to. */
	modId: number,
	/** The file id. */
	fileId: number,
}

export interface CurseForgeGetModFileDownloadURLOptions {
	/** The mod id the file belongs to. */
	modId: number,
	/** The file id. */
	fileId: number,
}

export interface CurseForgeGetFingerprintsMatchesByGameIdOptions {
	/** The game id for matching fingerprints. */
	gameId: number,
	/** The request body containing an array of fingerprints. */
	body: CurseForgeGetFingerprintMatchesRequestBody,
}

export interface CurseForgeGetFingerprintsFuzzyMatchesByGameIdOptions {
	/** The game id for matching fingerprints. */
	gameId: number,
	/** Game id and folder fingerprints options for the fuzzy matching. */
	body: CurseForgeGetFuzzyMatchesRequestBody,
}

export interface CurseForgeGetMinecraftVersionsOptions {
	sortDescending?: boolean,
}

export interface CurseForgeGetMinecraftModLoadersOptions {
	version?: string,
	includeAll?: boolean,
}
