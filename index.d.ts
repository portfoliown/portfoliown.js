// Type definitions for portfoliown
// Project: https://github.com/portfoliown/portfoliown.js
// Definitions by: zcabjro <https://github.com/zcabjro>

/**
 * MIT License
 * Copyright (c) 2018 portfoliown
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

 declare namespace portfoliown {

    /**
     * Interface for content-related data.
     */
    export interface IContentData {
        /**
         * Content title.
         */
        title: string;

        /**
         * Content description.
         */
        description: string;

        /**
         * Optional brief description.
         */
        brief?: string;
    }
    
    /**
     * Interface for project-related data.
     */
    export interface IProjectData {
        /**
         * Project title.
         */
        title: string;

        /**
         * Optional project content.
         */
        content?: IContentData[];
    }
    
    /**
     * Common interface for all project implementations.
     */
    export interface IProjectHandle {
        /**
         * Fetch the project's unique identifier.
         */
        getId(): Promise<string>;

        /**
         * Fetch the project's title.
         */
        getTitle(): Promise<string>;

        /**
         * Set the project's title.
         * @param title New project title.
         */
        setTitle(title: string): Promise<void>;

        /**
         * Add content to the project.
         * @param data New project content.
         * @returns Number of content elements after addition.
         */
        addContent(data: IContentData): Promise<number>;

        /**
         * Remove content from the project.
         * @param index Index of project content to remove.
         * @returns Number of content elements after deletion.
         */
        deleteContent(index: number): Promise<number>;

        /**
         * Fetch all content elements belonging to the project.
         */
        loadAllContent(): Promise<IContentData[]>;
    }
 }
