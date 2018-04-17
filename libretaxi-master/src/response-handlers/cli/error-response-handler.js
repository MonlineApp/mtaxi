/*
    LibreTaxi, free and open source ride sharing platform.
    Copyright (C) 2016-2017  Roman Pushkin

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import ResponseHandler from '../response-handler';

/**
 * Error response cli handler.
 * Prints {@link ErrorResponse} message to console with a leading cross mark.
 *
 * @author Roman Pushkin (roman.pushkin@gmail.com)
 * @extends {ResponseHandler}
 * @date 2016-08-31
 * @version 1.1
 * @since 0.1.0
 */
export default class ErrorResponseHandler extends ResponseHandler {
  constructor(options) {
    super(Object.assign({ type: 'cli-error-response-handler' }, options));
  }

  /**
   * Handler entry point.
   * Prints the message with a leading cross mark (❌) to console.
   */
  call(onResult) {
    console.log(`❌ ${this.response.message}`); // eslint-disable-line no-console
    onResult();
  }
}
